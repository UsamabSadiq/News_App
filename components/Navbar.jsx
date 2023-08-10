import { useRouter } from "next/router"


const Navbar = () => {
    const router = useRouter()
    const navItems = [
        {
            item: 'Home',
            route: '/'
        },
        {
            item: 'Feed',
            route: '/feed/1'
        },
        {
            item: 'EOM',
            route: '/eom'
        },
        {
            item: 'LinkedIn',
            route: 'https://www.linkedin.com/in/usama-bin-sadiq-ieengr/'
        }
    ]
    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">

                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            {
                                navItems.map((list, ind) => {
                                    return (
                                        <li key={ind}>
                                            <a onClick={() => router.push(list.route)} className="block py-2 pl-3 pr-4 text-white  md:bg-transparent md:p-0 hover:text-blue-800 cursor-pointer">{list.item}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
