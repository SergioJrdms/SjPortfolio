// Create this component or include its logic directly
function ScrollDownIndicator() {
    return (
         <a href="#about" className="scroll-down absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs text-text-secondary opacity-80 transition-opacity hover:opacity-100 cursor-pointer z-10" aria-label="Rolar para baixo">
            <div className="mouse mb-2 relative h-[38px] w-[24px] rounded-full border-2 border-text-secondary">
                <span className="absolute top-2 left-1/2 -translate-x-1/2 block h-[8px] w-[4px] rounded-full bg-accent animate-scroll"></span>
            </div>
            <span>Rolar</span>
        </a>
    );
}

export default ScrollDownIndicator;