import { loading } from '../assets'

const Generating = ({ className }) => {
    return (
        <div
            className={`bg-n-8/80 flex h-[3.5rem] items-center rounded-[1.7rem] px-6 ${
                className || ''
            } text-base`}
        >
            <img className="mr-4 h-5 w-5" src={loading} alt="Loading" />
            AI is generating
        </div>
    )
}

export default Generating
