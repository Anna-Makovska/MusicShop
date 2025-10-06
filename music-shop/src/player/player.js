class Player {
  constructor() {
    this.audio = new Audio()
    this.audio.loop = true
    this.audio.volume = 0.7
    this.track = null
    this.subs = new Set()
    this.audio.addEventListener('ended', () => this.notify())
    this.audio.addEventListener('timeupdate', () => this.notify('time'))
  }
  subscribe(fn){ this.subs.add(fn); return () => this.subs.delete(fn) }
  notify(type='state'){ this.subs.forEach(fn => fn({ type, track: this.track, audio: this.audio })) }

  play(track){
    if(!track?.audio) return
    if(this.track?.id !== track.id){
      this.track = track
      this.audio.src = track.audio
    }
    this.audio.play()
    this.notify()
  }
  pause(){ this.audio.pause(); this.notify() }
  toggle(){ this.audio.paused ? this.play(this.track) : this.pause() }
  isPlaying(){ return !this.audio.paused }
  timeLabel(){
    const cur = Math.floor(this.audio.currentTime||0)
    const dur = Math.floor(this.audio.duration||0)
    const f = s => `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`
    return `${f(cur)} / ${f(dur)}`
  }
}
export const player = new Player()
