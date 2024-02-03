import Autocomplete from "./components/ui/autocomplete";

const App = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col gap-y-5 items-center">
        <div>
          <h1 className="text-5xl font-bold ">Autocomplete Demo</h1>
        </div>
        <Autocomplete />
        <div className="flex gap-x-3 underline text-xs">
          <a href="">Github</a>
          <a href="">Linkedin</a>
        </div>
      </div>
    </div>
  );
};

export default App;
