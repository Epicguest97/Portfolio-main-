export default function LastPlayedSong() {
  return (
    <div className="mt-8">
      <h2 className="text-sm font-medium mb-2 text-white">LAST PLAYED SONG</h2>
      <div className="flex items-center gap-2 border border-white/20 bg-white/5 px-3 py-2 rounded-md w-full">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/7/72/The_Weeknd_and_Anitta_-_S%C3%A3o_Paulo.png" 
          alt="Sao Paulo" 
          className="w-8 h-8 object-cover rounded"
        />
        <div className="flex flex-col">
          <span className="font-medium text-white text-sm">São Paulo</span>
          <span className="text-xs text-white/60">The Weeknd</span>
        </div>
        <span className="ml-auto text-xs text-white/40">1 day ago</span>
      </div>
    </div>
  );
}
