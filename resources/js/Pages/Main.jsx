import Modal from '@/Components/Modal.jsx';
import Layout from '@/Layouts/Layout.jsx';
import Login from '@/Pages/Auth/Login.jsx';

import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function Main() {
    const auth = usePage().props.auth;
    const user = auth.user;
    const [showLogin, setShowLogin] = useState(false);

    const openLogin = () => setShowLogin(true);
    const closeLogin =() => setShowLogin(false);
    const projects = () => {
        router.get('projects');
    };
    return (
        <>
            <Layout onLoginClick={openLogin}>
                {!user ? (
                    <div
                        className="hero min-h-full"
                        style={{
                            backgroundImage:
                                'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
                        }}
                    >
                        <div className="hero-overlay"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">
                                    Hello there
                                </h1>
                                <p className="mb-5">
                                    Provident cupiditate voluptatem et in.
                                    Quaerat fugiat ut assumenda excepturi
                                    exercitationem quasi. In deleniti eaque aut
                                    repudiandae et a id nisi.
                                </p>
                                <button className="btn btn-primary">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <h2 className="mb-6 px-6 text-3xl font-bold">
                            Funcionalidades del proyecto
                        </h2>
                        <div className="grid gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3">
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img
                                        src="img/projects.jpeg"
                                        alt="Proyectos"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Ver Proyectos
                                    </h2>
                                    <p>
                                        Un listado de los proyectos que realizan
                                        los alumnos
                                    </p>
                                    <div className="card-actions justify-end">
                                        <Link
                                            href={projects}
                                            className="btn btn-primary"
                                        >
                                            Gestionar Proyectos
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card bg-base-100 w-96 shadow-sm">
                                <figure>
                                    <img width='200px'
                                        src="img/cronometro.png"
                                        alt="Proyectos"
                                    />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        Ver Cronómetro
                                    </h2>
                                    <p>
                                        Cronómetro
                                    </p>
                                    <div className="card-actions justify-end">
                                        <Link
                                            href={projects}
                                            className="btn btn-primary"
                                        >
                                            Ver cronómetro funcionando
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                )}
            </Layout>
            <Modal show={showLogin} onClose={closeLogin}>
                <Login onSuccess={closeLogin} />
            </Modal>
            )
        </>
    );
}
