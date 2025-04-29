function NotFoundPage()
{
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <h1 className="text-4xl font-bold mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-8">Page Not Found</p>
            <a
                href="/"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Go Back Home
            </a>
        </div>
    );
}

export default NotFoundPage;