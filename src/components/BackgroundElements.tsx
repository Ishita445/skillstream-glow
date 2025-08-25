const BackgroundElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating background shapes */}
      <div className="bg-shape-primary w-96 h-96 -top-20 -left-20 animate-float"></div>
      <div className="bg-shape-secondary w-80 h-80 -bottom-20 -right-20 animate-float-delayed"></div>
      <div className="bg-shape-primary w-64 h-64 top-1/2 left-2/5 animate-float"></div>
      <div className="bg-shape-secondary w-48 h-48 top-1/4 right-1/4 animate-float-delayed"></div>
      
      {/* Additional subtle shapes */}
      <div className="absolute w-32 h-32 bg-primary/10 rounded-full blur-2xl top-3/4 left-1/4 animate-pulse"></div>
      <div className="absolute w-24 h-24 bg-secondary/10 rounded-full blur-2xl bottom-1/4 right-1/3 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};

export default BackgroundElements;