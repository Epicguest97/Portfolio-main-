export default function LastPlayedSong() {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-4">LAST PLAYED SONG</h2>
      <div className="flex items-center gap-3 bg-neutral-900/80 px-4 py-3 rounded-xl shadow w-full">
        <img src="https://upload.wikimedia.org/wikipedia/en/2/28/Frank_Ocean_-_Blonde.png" alt="Nights" className="w-10 h-10 rounded" />
        <div className="flex flex-col">
          <span className="font-medium text-white">Nights</span>
          <span className="text-xs text-white/60">Frank Ocean</span>
        </div>
        <span className="ml-auto text-xs text-white/40">1 day ago</span>
      </div>
    </div>
  );
}
