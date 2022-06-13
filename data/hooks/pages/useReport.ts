import { useState, useEffect } from "react";
import { Report } from "../../@types/Report";
import { ApiService } from "../../services/ApiService";


export function useReport(){
    const[reportList, setReportList] = useState<Report[]>([]);

    useEffect(() => {
        ApiService.get('/adoptions').then((response) => {
            setReportList(response.data);
        })
    }, [])

    return {
        reportList
    }
}