import { NextPage } from "next";
import Title from "../../ui/components/title/title";
import { Paper, Table,
        TableContainer,
        TableHead,
        TableRow,
        TableCell,
        TableBody } from "@mui/material";
import { useReport } from "../../data/hooks/pages/useReport";

const Report: NextPage = () => {
    const { reportList } = useReport();
    return (
        <>
            <Title
                title={'Relatório de adoções'}
                subtitle={'Registro de todos os pets adotados'}
            />
            <TableContainer 
                component={Paper}
                sx={{maxWidth: 830, mx: 'auto', p:{ xs: 3, md: 5}}}
            >
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Pet</TableCell>
                            <TableCell>E-mail</TableCell>
                            <TableCell align={'right'}>Valor mensal</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reportList.map((report) => (
                            <TableRow key={report.id}>
                                <TableCell>{report.pet.name}</TableCell>
                                <TableCell>{report.email}</TableCell>
                                <TableCell align={'right'}>{report.amount}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Report;