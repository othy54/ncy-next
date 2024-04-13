import Logo from "./Logo"
import Button from "./Button"

export default function Header() {
    return (
        <header className="fixed left-0 top-0 w-full z-50 px-8 py-10">
            <div className="row flex w-full justify-between items-center">
                <Logo />
                <Button text="03 54 12 23 11" icon="icon-[material-symbols--ring-volume]" />
            </div>
        </header>
    )
}