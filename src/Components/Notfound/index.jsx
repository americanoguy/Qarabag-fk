const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-purple-200 mb-8">Not Found</p>
        <button
          onClick={() => (window.location.href = "/")}
          className="px-6 py-3 bg-white text-purple-900 rounded-lg font-semibold hover:bg-purple-100"
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
