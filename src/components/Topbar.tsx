import { Button } from "./ui/button"

export const Topbar: React.FC = () => {
    return (
        <>
            <div className="flex justify-end m-2">
                <div className="grid grid-cols-2 gap-4">
                <Button className="bg-orange-500 text-white">
                    Sign up
                </Button>
                <Button className="bg-orange-500 text-white">
                    Log In
                </Button>
                </div>
            </div>
        </>
    )
}