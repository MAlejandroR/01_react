import { Link } from '@inertiajs/react';

export default function Nav() {
    return (
        <nav className="h-nav bg-nav flex w-full flex-row items-center justify-between space-x-4 px-4 px-5">
            <div>
                <Link className="btn btn-sm btn-glass m-2" href="">
                    Acceso
                </Link>
                <Link className="btn btn-sm btn-glass m-2" href="">
                    Registar
                </Link>
            </div>
        </nav>
    );
}
