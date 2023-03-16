export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <div className='footerBase'>
            <div></div>
            <div className='footerContent'>
                Forrest Smietanski &copy; {currentYear}
            </div>
            <div><script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="fsmietanski" data-description="Support me on Buy me a coffee!" data-message="" data-color="#f1f3fb" data-position="Right" data-x_margin="18" data-y_margin="18"></script></div>
        </div>)
}
