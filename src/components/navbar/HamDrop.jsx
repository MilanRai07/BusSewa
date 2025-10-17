import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from '../../assets/svg/cross.svg';

const HamDrop = ({ lists, setShowHam }) => {

    const clickItem = () => {
        setShowHam(false);
    };
    return (
        <div className="bg-white border-[0.5px] border-black/50  w-full p-6 h-auto text-black ">
            <div className={`flex w-full justify-between items-center mb-5`}>
                <div>
                    <NavLink to='/'>
                        <img src='/logo.webp' className='w-[150px] h-[60px] max-[500px]:w-[100px] max-[500px]:h-[40px]' />
                    </NavLink>
                </div>
                <div>
                    <Cross className='w-[30px] h-[30px] stroke-black'
                        onClick={() => {
                            setShowHam(false)
                        }} />
                </div>
            </div>

            <ul className="Flex-Col space-y-4 list-none h-auto mb-5 max-[548px]:mb-3 justify-between">
                {
                    lists.map((item, index) => {
                        const { name, path } = item;
                        return (
                            <NavLink
                                to={path}
                                key={index}
                                onClick={() => clickItem(name)}
                                className="block w-full"
                            >
                                <li className="flex justify-between items-center border-b border-black/50 pb-2 max-[548px]:pb-1 cursor-pointer font-medium text-black text-base max-[548px]:text-xs">
                                    {name}
                                </li>
                            </NavLink>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default HamDrop