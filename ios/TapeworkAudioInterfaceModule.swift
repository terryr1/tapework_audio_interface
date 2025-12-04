import ExpoModulesCore
import AVFoundation

public class TapeworkAudioInterfaceModule: BaseModule {
  private let engine = AVAudioEngine()
  private var players: [AVAudioPlayerNode] = []



  required public init(appContext: AppContext) {
        super.init(appContext: appContext)

        // any setup you want:
        try? engine.start()
    }

    func stopAll() {
        for player in players {
            player.stop()
            engine.detach(player)
        }
        players.removeAll()
    }


  // See https://docs.expo.dev/modules/module-api for more details about available components, definition() returns a ModuleDefinition
  public func definition() -> ModuleDefinition {

    
    Name("TapeworkAudioInterface")

    // Defines constant property on the module.
    Constant("PI") {
      Double.pi
    }

    // Defines event names that the module can send to JavaScript.
    Events("onChange")

    // Defines a JavaScript synchronous function that runs the native code on the JavaScript thread.
    Function("playAudioInSync") { (audioUris: [String]) in
      stopAll() // stop previous layers

        players = []

        for uri in audioUris {
            let url = URL(fileURLWithPath: uri)
            let file = try! AVAudioFile(forReading: url)

            let player = AVAudioPlayerNode()
            players.append(player)

            // you connect the player to the output node, that node is where the audio is played?
            engine.attach(player)
            engine.connect(player, to: engine.mainMixerNode, format: file.processingFormat)

            // scheduling now — but not playing yet
            player.scheduleFile(file, at: nil, completionHandler: nil)
        }

        // Sync start time for perfect alignment
        let startTime = AVAudioTime(hostTime: mach_absolute_time())

        for player in players {
            player.play(at: startTime)
        }
    }

    AsyncFunction("setValueAsync") { (value: String) in
      // Send an event to JavaScript.
      self.sendEvent("onChange", [
        "value": value
      ])
    }
  }
}
