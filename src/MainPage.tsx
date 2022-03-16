import { Button } from '@mui/material';
import React from 'react';
import ToolBar from './component/ToolBar';
import './style/MainPage.css';


const MainPage: React.FC = () => {       
    
    return (
        <div className="Wrapper">
            <div className="MainPage">
                <ToolBar/>
                <Button></Button>

	        </div>
        </div>
    );
}

export default MainPage;
