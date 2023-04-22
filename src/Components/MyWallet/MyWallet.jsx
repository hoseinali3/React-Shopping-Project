import React, { useState, useEffect } from 'react'
import './MyWallet.css'
import { Button } from '@mui/material';
import { myWalletData } from './MyWalletData'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import PageinationComp from '../Pageination/PageinationComp';
import { Link } from 'react-router-dom';
import AddValidityModal from '../AddValidityModal/AddValidityModal';

export default function MyWallet() {

    const [showValidityModal, setShowValidityModal] = useState(false)
    const [walletData, setWalletData] = useState(myWalletData)
    const [currentPage, setCurrentPage] = useState(1)
    const [currentTrans, setCurrentTrans] = useState([])

    let pageSize = 5;
    const pagesCount = Math.ceil(walletData.length / pageSize)
    let pagesNumbers = Array.from(Array(pagesCount).keys())


    const activeNumHandler = (event, value) => {
        setCurrentPage(value);
    };

    let endIndex = pageSize * currentPage;
    let startIndex = endIndex - pageSize;
    let allShowOrder;

    useEffect(() => {

        allShowOrder = walletData.slice(startIndex, endIndex);
        setCurrentTrans(allShowOrder)
    }, [])

    useEffect(() => {

        allShowOrder = walletData.slice(startIndex, endIndex);
        setCurrentTrans(allShowOrder)
    }, [currentPage])



    const cancelValidityModal = () => {
        setShowValidityModal(false)
    }


    return (
        <>
        <div className='mywallet-wrapper'>
            <div className="mywallet-header">
                <div className="mywallet-header-rightside">
                    <h4 className='mywallet-title'>اعتبار کیف پول:</h4>
                    <h4 className='mywallet-Validity'>{Number(258200).toLocaleString()} تومان</h4>
                </div>
                <div className="mywallet-header-leftside">
                    <Button onClick={() => setShowValidityModal(true)} >
                        افزودن اعتبار
                    </Button>
                </div>
            </div>
            <div className="mywallet-transactions">
                <table className='mywallet-table'>
                    <thead className='mywallet-thead'>
                        <tr>
                            <th>شناسه</th>
                            <th>عنوان</th>
                            <th>مبلغ</th>
                            <th>تاریخ</th>
                        </tr>
                    </thead>
                    <tbody className='mywallet-tbody'>
                        {walletData.map(wallet => (
                            <tr>
                                <td>#{wallet.transID}</td>
                                <td>{wallet.title}</td>
                                <td>{wallet.deposit ? <AddIcon color='success' /> : <RemoveIcon color='error' />} {Number(wallet.amount).toLocaleString()} تومان</td>
                                <td>{wallet.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <PageinationComp pagesCount={pagesCount} currentPage={currentPage} activeNumHandler={activeNumHandler} />
        </div>
            <AddValidityModal isShowModal={showValidityModal} cancelValidityModal={cancelValidityModal}/>
                                </>
    )
}
