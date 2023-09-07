import './dashboard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faEye,faChartLine, faMoneyBills } from '@fortawesome/free-solid-svg-icons'
const Dashboard = () => {
    return (
        <div className='dashboard-wrapper'>
            <div className='dashboard-header'>
                <span className='dashboard-header_title'>
                    <h1>Dashboard</h1>
                </span>
            </div>
            <div className='dashboard-content'>
                <div className='dashboard-content_spec' >
                    <ul>
                        <li>
                            <span  className='icon'>
                            <FontAwesomeIcon icon={faCalendar} />    
                            </span>
                            <span>
                                <h3>1,524</h3>
                                <p>Paid Order</p>
                            </span>
                        </li>
                        <li>
                            <span  className='icon'>  
                                <FontAwesomeIcon icon={faEye} />
                            </span>
                            <span>
                                <h3>1,607</h3>
                                <p>Site visit</p>
                            </span>
                        </li>
                        <li>
                            <span  className='icon'>  
                                <FontAwesomeIcon icon={faChartLine} />
                            </span>
                            <span>
                                <h3>1,003</h3>
                                <p>Seaches</p>
                            </span>
                        </li>
                        <li>
                            <span  className='icon'>  
                                <FontAwesomeIcon icon={faMoneyBills} />
                            </span>
                            <span>
                                <h3>$3,454</h3>
                                <p>Total Sales</p>
                            </span>
                        </li>
                       
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Dashboard;