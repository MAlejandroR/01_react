import { usePage, router } from '@inertiajs/react';

export default function Header({onLoginClick}) {

const  {auth} = usePage().props;
const user = auth.user;
const logout = ()=>{
    router.post("logout");
};

    return (
        <header className="h-header bg-header flex justify-between items-center">
            <img src="img/logo.png" alt="logo" className="max-h-full"/>
                <h1 className="text-4xl text-blue-900">GESTION DEL INSTITUTO</h1>
                <div>
                    <div>

                        {user? (
                            <>
                            <p>{user.name}</p>
                            <button onClick={logout} className="btn btn-primary cursor-pointer">Logout</button>
                            </>
                            ):
                    (
                    <div>

                            <button type="submit" onClick={onLoginClick}
                                    className="btn btn-primary cursor-pointer">Login
                            </button>

                        <a href="register">
                            <button type="submit" className="btn btn-primary cursor-pointer">Register</button>
                        </a>
                    </div>
                 )
                        }
                    </div>
                </div>
        </header>
   );
}
