// import { useSession } from "next-auth/client";
import { signIn, signOut, useSession } from 'next-auth/client'


export default IndexPage = () => {
    const [session, loading] = useSession()

    return (
        <>
            {!session && <>
                Not signed in <br />
                <button type="button" onClick={() => signIn}>Sign in</button>
            </>}
            {session && <>
                Signed in as {session.user.name} <br />
                <button type="button" onClick={() => signOut}>Sign out</button>
            </>}
        </>
    )
}