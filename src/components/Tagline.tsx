import brackets from '../assets/svg/Brackets'

const TagLine = ({ className, children }: any) => {
    return (
        <div className={`tagline flex items-center ${className || ''}`}>
            {brackets('left')}
            <div className="text-n-3 mx-3">{children}</div>
            {brackets('right')}
        </div>
    )
}

export default TagLine
