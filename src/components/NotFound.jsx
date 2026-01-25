import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-9xl font-black text-primary opacity-20 select-none">404</h1>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
                    Page Not Found
                </h2>
                <p className="text-xl text-gray-400 max-w-lg mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    to="/"
                    className="group flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-lg font-bold hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/25 hover:-translate-y-1"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Go Back Home
                </Link>
            </div>

            {/* Background decoration */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>
        </div>
    );
}
