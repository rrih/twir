import { useSession, getSession } from 'next-auth/client'
import { Layout } from '../components/Layout'

const Page = () => {
    const [session, loading] = useSession()

    return (
        <Layout>
            <h1>SSR</h1>
        </Layout>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {
            session: await getSession(context)
        }
    }
}