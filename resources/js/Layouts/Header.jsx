import {usePage, router, Link} from '@inertiajs/react';


export default function Header({onLoginClick, onRegisterClick}) {

    const {auth} = usePage().props;
    const user = auth.user;
    const logout = () => {
        router.post("logout");
    };


    return (
        <header className="h-header bg-header flex justify-between items-center">
            <img src="img/logo.png" alt="logo" className="max-h-full"/>
            <h1 className="text-4xl text-blue-900">GESTION DEL INSTITUTO</h1>
            <div>
                <div>

                    {user ? (
                            <>
                                <p>{user.name}</p>
                                <Link href='logout' className="btn btn-primary cursor-pointer" as="button" method='post'>
                                    Logout
                                </Link>

                            </>
                        ) :
                        (
                            <div>
                                <button onClick={onLoginClick} className="btn btn-primary cursor-pointer">
                                    Login
                                </button>


                                <button onClick={onRegisterClick} type="submit"
                                        className="btn btn-primary cursor-pointer">
                                    Register
                                </button>
                            </div>
                        )
                    }
                </div>
            </div>
        </header>
    );
}
