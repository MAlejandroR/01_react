import Header from '@/Layouts/Header.jsx';
import Nav from '@/Layouts/Nav.jsx';
import Footer from '@/Layouts/Footer.jsx';

export default function Layout({ children, onLoginClick }) {

    return (
        <>
            <Header onLoginClick={onLoginClick}/>
            <Nav />
            <main className="h-main bg-main">{children}</main>
            <Footer />
        </>
    );
}
