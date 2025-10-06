import { GoInfo } from "react-icons/go"
import { Container } from "./widgets/container"

export const NotFoundPage = () => {
    return <section className="py-20">
        <Container>
            <div className="min-h-[80vh] flex flex-col gap-5 items-center justify-center">
                <GoInfo size={95} />

                <h1>404 - страница</h1>
            </div>
        </Container>
    </section>
}