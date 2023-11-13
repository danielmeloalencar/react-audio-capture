import AudioRecorder from "./components/AudioRecordingComponent";
import useAudioRecorder from "./hooks/useAudioRecorder";

 function App () {
  const recorderControls = useAudioRecorder();

  const addAudioElement = (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    //audio.autoplay = true;
    document.body.appendChild(audio);
  };

  return (
    <>
      <AudioRecorder
        onRecordingComplete={(blob) => addAudioElement(blob)}
        // audioTrackConstraints={{
        //   noiseSuppression: true,
        //   echoCancellation: true,
        // }}
        onNotAllowedOrFound={(err) => console.table(err)}
        showVisualizer={true}
        recorderControls={recorderControls}
      />
      <button onClick={() => recorderControls.startRecording()}> Record </button>
      <button onClick={() => recorderControls.stopRecording()}> Stop </button>
      
    </>
  );
}

export default App;
