export function GridBackground() {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, rgba(219, 39, 119, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(219, 39, 119, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '4rem 4rem',
        }} />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 20% 20%, rgba(219, 39, 119, 0.4) 0%, transparent 50%)'
          }}
        />
        <div className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)'
          }}
        />
      </div>
    )
  }
  
  