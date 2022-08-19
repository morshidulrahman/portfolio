import {  AiOutlineHome,AiOutlineUserAdd } from 'react-icons/ai';
import {  BsBriefcase} from 'react-icons/bs';
import {  FaGraduationCap} from 'react-icons/fa';
import {  FiLayers} from 'react-icons/fi';
import {  MdOutlineNoteAlt} from 'react-icons/md';
import {  ImBubbles4} from 'react-icons/im';

export const sidebar= {
    logo:"/assets/logo.svg",
    menus:[
        {
            icon:<AiOutlineHome/>,
            to:"home"
        },
        {
            icon:<AiOutlineUserAdd/>,
            to:"about"
        },
        {
            icon:<BsBriefcase/>,
            to:"services"
        },
        {
            icon:<FaGraduationCap/>,
            to:"resume"
        },
        {
            icon:<FiLayers/>,
            to:"portfolio"
        },
        {
            icon:<MdOutlineNoteAlt/>,
            to:"blogs"
        },
        {
            icon:<ImBubbles4/>,
            to:"contact"
        }
    ]
}