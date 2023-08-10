import Image from "next/image";

const EOM = ({ employee }) => {
    // console.log(employee);
    return (
        <>
            <div className="main flex flex-col items-center justify-center h-screen gap-4">
                <Image src='./vercel.svg' width={150}
                    height={150}
                    alt="Picture of the author" />
                <h1 className="name text-3xl font-semibold">Usama Bin Sadiq</h1>
                <p className="position text-2xl font-semibold">{employee.position}</p>
                <p className="desc text-xl">{employee.description}</p>
            </div>
        </>
    )
}


export const getServerSideProps = async () => {
    const response = await fetch('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')
    const employeeResponse = await response.json()

    return {
        props: {
            employee: employeeResponse
        }
    }
}

export default EOM
