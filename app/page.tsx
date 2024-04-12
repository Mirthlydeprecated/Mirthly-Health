export default function Home() {
  return (
    <div>
      <div className="border-2 border-black">
        <div className="w-full flex border-2 border-red-500 justify-between items-center p-4">
          <div className="font-semibold text-xl">Mirthly Health</div>
          <div>Tagline Here</div>
          <div className="flex gap-4">
            <button className="bg-transparent cursor-pointer p-2">
              Sign Up
            </button>
            <button className="bg-slate-300 rounded-xl py-2 px-4">
              Log in
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          Models here
        </div>
      </div>
    </div>
  );
}
