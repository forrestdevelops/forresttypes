export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <div className='footerBase'>
            <div className='footerContent'>
                Forrest Smietanski &copy; {currentYear}
            </div>
        </div>)
}
