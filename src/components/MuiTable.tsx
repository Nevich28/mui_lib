import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
} from '@mui/material';

export const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label="simple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First name</TableCell>
                        <TableCell>Last name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

const tableData = [
    {
        id: 1,
        first_name: 'Mahala',
        last_name: 'Sleney',
        email: 'msleney0@typepad.com',
        gender: 'Genderqueer',
        ip_address: '217.142.92.79',
    },
    {
        id: 2,
        first_name: 'Rob',
        last_name: 'Hardy',
        email: 'rhardy1@abc.net.au',
        gender: 'Male',
        ip_address: '124.197.237.147',
    },
    {
        id: 3,
        first_name: 'Britni',
        last_name: 'Perin',
        email: 'bperin2@japanpost.jp',
        gender: 'Female',
        ip_address: '149.181.36.215',
    },
    {
        id: 4,
        first_name: 'Orren',
        last_name: 'Chantrell',
        email: 'ochantrell3@elpais.com',
        gender: 'Male',
        ip_address: '123.240.55.158',
    },
    {
        id: 5,
        first_name: 'Tadeo',
        last_name: 'Gorrie',
        email: 'tgorrie4@lycos.com',
        gender: 'Male',
        ip_address: '219.156.18.253',
    },
    {
        id: 6,
        first_name: 'Tully',
        last_name: 'Gaskin',
        email: 'tgaskin5@irs.gov',
        gender: 'Male',
        ip_address: '121.3.43.188',
    },
    {
        id: 7,
        first_name: 'Dorolisa',
        last_name: 'Tilley',
        email: 'dtilley6@telegraph.co.uk',
        gender: 'Female',
        ip_address: '242.150.105.172',
    },
    {
        id: 8,
        first_name: 'Lammond',
        last_name: 'Archell',
        email: 'larchell7@instagram.com',
        gender: 'Genderfluid',
        ip_address: '139.152.88.8',
    },
    {
        id: 9,
        first_name: 'Chadd',
        last_name: 'Lavall',
        email: 'clavall8@moonfruit.com',
        gender: 'Male',
        ip_address: '137.32.46.84',
    },
    {
        id: 10,
        first_name: 'Reginauld',
        last_name: "O'Hoey",
        email: 'rohoey9@state.gov',
        gender: 'Male',
        ip_address: '208.254.143.134',
    },
];
