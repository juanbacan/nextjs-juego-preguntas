import Head from "next/head";
import ResponsiveAppBar from "../../components/layout/appbar/ResponsiveAppBar";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

const LayoutMain = ({ children }: DashboardLayoutProps) => {
    return(
        <>
            <Head>
				<title>Juego de Preguntas</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

            <ResponsiveAppBar />

            <div>
                {children}
            </div>
        </>
    );
}

export default LayoutMain;