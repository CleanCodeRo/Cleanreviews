import Toolbox from './Toolbox';

export default function Home() {
    return (
        <main className="mx-10 flex min-h-screen flex-col items-center justify-start bg-no-repeat">
            <Toolbox />
            <div className="mx-24 flex w-full flex-col items-start justify-center bg-white">
                <div className="w-full p-24">
                    <div className="m-5 border-b-2 border-red-600 p-5 text-4xl text-red-600">
                        Newly Added
                    </div>
                    <div className="mx-24 border-b-2 border-red-600 bg-red-600 p-5 text-2xl text-white">
                        Movies
                    </div>
                    <div className="mx-24 mb-5 border-b-2 border-red-600 p-5 text-2xl text-white"></div>
                    <div className="mx-24 border-b-2 border-red-600 bg-red-600 p-5 text-2xl text-white">
                        Shows
                    </div>
                    <div className="mx-24 mb-5 border-b-2 border-red-600 p-5 text-2xl text-white"></div>
                    <div className="mx-24 border-b-2 border-red-600 bg-red-600 p-5 text-2xl text-white">
                        Books
                    </div>
                    <div className="mx-24 mb-5 border-b-2 border-red-600 p-5 text-2xl text-white"></div>
                    <div className="mx-24 border-b-2 border-red-600 bg-red-600 p-5 text-2xl text-white">
                        Restaurants
                    </div>
                    <div className="mx-24 mb-5 border-b-2 border-red-600 p-5 text-2xl text-white"></div>
                </div>
                <div className="w-full p-24">
                    <div className="m-5 border-b-2 border-red-600 p-5 text-4xl text-red-600">
                        Recommended
                    </div>
                    <div className="mx-24 border-b-2 border-red-600 bg-red-600 p-5 text-2xl text-white">
                        Movies
                    </div>
                    <div className="mx-24 mb-5 border-b-2 border-red-600 p-5 text-2xl text-white"></div>
                    <div className="mx-24 border-b-2 border-red-600 bg-red-600 p-5 text-2xl text-white">
                        Shows
                    </div>
                    <div className="mx-24 mb-5 border-b-2 border-red-600 p-5 text-2xl text-white"></div>
                    <div className="mx-24 border-b-2 border-red-600 bg-red-600 p-5 text-2xl text-white">
                        Books
                    </div>
                    <div className="mx-24 mb-5 border-b-2 border-red-600 p-5 text-2xl text-white"></div>
                    <div className="mx-24 border-b-2 border-red-600 bg-red-600 p-5 text-2xl text-white">
                        Restaurants
                    </div>
                    <div className="mx-24 mb-5 border-b-2 border-red-600 p-5 text-2xl text-white"></div>
                </div>
            </div>
        </main>
    );
}
