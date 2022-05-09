import React, { useEffect } from 'react';
import {
    AppBar,
    Box,
    Button,
    Dialog,
    Grid,
    IconButton,
    ImageList,
    ImageListItem,
    Slide, Step, StepLabel, Stepper,
    TextField,
    Toolbar
} from "@mui/material";
import { Typography } from '@mui/material';
import Wifi from '@mui/icons-material/Wifi';
import Bed from '@mui/icons-material/Bed';
import Pets from '@mui/icons-material/Pets';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import * as yup from 'yup';

export const RoomInfo = () => {
    const rooms = [
        'https://images.homify.com/c_fill,f_auto,q_0,w_740/v1452164048/p/photo/image/1227856/3.jpg',
        'https://tecnohotelnews.com/wp-content/uploads/2020/07/image004-2.jpg',
        'https://tecnohotelnews.com/wp-content/uploads/2020/07/image003-7-696x383.jpg.webp',
    ]

    const [roomSelect , setRoomSelect] = React.useState(rooms[0]);
    const [open, setOpen] = React.useState(false);
    //GUaradar data primer formulario
    const [firstStep, setFirstStep] = React.useState(null);
     //GUaradar data segundo formulario
     const [secondStep, setSecondStep] = React.useState(null);
    const [step, setStep] = React.useState(1);

    useEffect (()=>{
        if(firstStep !== null && secondStep !== null){
            //ejecuta api
        }
    },[firstStep, secondStep]);
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    }

    const validationSchema = yup.object({
        name: yup
        .string('name is required')
        .required('name is required'), 
        lastName: yup
            .string('Last name is required')
            .required('Last name is required'),
        address: yup
            .string('Address is required')
            .required('Address is required'),
        age: yup
            .number('Age is required')
            .required('Age is required'),
        city: yup
            .string('Address is required')
            .required('Address is required'),
        country : yup
            .string('Country is required')
            .required('Country is required'),
        phone : yup
            .string('Phone is required').matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Phone number is not valid"
            )
            .required("This field is Required"),

        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required('Email is required'),
    });


    const formik = useFormik({
        initialValues: {
            name:'',
            lastName: '',
            address: '',
            age: null,
            city: '',
            country: '',
            phone: 0,
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {

            console.log(values);
            setFirstStep(values)
            setStep(2);
        },
    })

    const validationSchema2 = yup.object({
        name: yup
            .string('name is required')
            .required('name is required'),
        lastName: yup
            .string('Last name is required')
            .required('Last name is required'),
        numberCard : yup
            .string('Number of card is reqired') .matches(
                /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
                "Enter a number card valid"
            )
            .required("This field is Required"),

        expirationDate: yup
            .date('Enter your email')
            .required('Expiration date is required'),
    });


    const formik2 = useFormik({
        initialValues: {
            name:'',
            lastName: '',
            numberCard:'',
            expirationDate:''
           
        },
        validationSchema: validationSchema2,
        onSubmit: (values) => {
            
        },
    })



    const renderTitle = () => {
        return (
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: '1rem',
                paddingTop: '3px',
            }}
            >
                <Typography variant="h6" gutterBottom component="div">
                    Titulo
                </Typography>
            </Box>
        )
    }

    const renderIcon = (Title, children) => {
        return (
            <Box sx={{
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection: 'row',
                gap: '1rem',
            }}>
                {children} <Typography sx={{marginTop: '1px' }} variant="body2" gutterBottom component="div"> {Title} </Typography>
            </Box>
        )
    }

    const renderIcons = () => {
        return (
            <Box
                sx={{
                    display: 'flex',
                    marginTop: '1rem',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    width: '100%',
                    paddingLeft: '1rem',
                }}
            >
                {renderIcon('WiFi', <Wifi />)}
                {renderIcon('2 Camas', <Bed />)}
                {renderIcon('Mascotas Permitidas', <Pets />)}
            </Box>
        )
    }
    const steps = [
        'Datos Personales',
        'Detalles de pago',
    ];

    const renderDialog = () => {
        return (
            <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Proceso de pago
                        </Typography>
                    </Toolbar>
                </AppBar>
                    <div className='flex w-full justify-center align-center' >
                    <Box sx={{ width: '50%' }}>
                                <Stepper activeStep={step} alternativeLabel>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                        
                        { step === 1? renderFirstStep():renderSecondStep()}
                        </Box>
                    </div>
            </Dialog>
        )
    }

    const renderFirstStep = ()=>{
        return(
            <form className='flex w-full justify-center flex-col gap-4 mt-3' onSubmit={formik.handleSubmit}>
                            
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                             <TextField
                                fullWidth
                                id="lastName"
                                name="lastName"
                                label="Apellido"
                                type="text"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                            <TextField
                                fullWidth
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                           
                            <TextField
                                fullWidth
                                id="address"
                                name="address"
                                label="Dirección"
                                type="text"
                                value={formik.values.address}
                                onChange={formik.handleChange}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                            />
                            <TextField
                                fullWidth
                                id="age"
                                name="age"
                                label="Edad"
                                type="text"
                                value={formik.values.age}
                                onChange={formik.handleChange}
                                error={formik.touched.age && Boolean(formik.errors.age)}
                                helperText={formik.touched.age && formik.errors.age}
                            />
                            <TextField
                                fullWidth
                                id="city"
                                name="city"
                                label="Ciudad"
                                type="text"
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                error={formik.touched.city && Boolean(formik.errors.city)}
                                helperText={formik.touched.city && formik.errors.city}
                            />
                            <TextField
                                fullWidth
                                id="country"
                                name="country"
                                label="País"
                                type="text"
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                error={formik.touched.country && Boolean(formik.errors.country)}
                                helperText={formik.touched.country && formik.errors.country}
                            />
                            <TextField
                                fullWidth
                                id="phone"
                                name="phone"
                                label="Teléfono"
                                type="number"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                error={formik.touched.phone && Boolean(formik.errors.phone)}
                                helperText={formik.touched.phone && formik.errors.phone}
                            />
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        </form>
        );
    }

    const renderSecondStep =()=>{
        return(
            <form className='flex w-full justify-center flex-col gap-4 mt-3' onSubmit={formik2.handleSubmit}>
                            
                            <TextField
                                fullWidth
                                id="name"
                                name="name"
                                label="Name"
                                value={formik2.values.name}
                                onChange={formik2.handleChange}
                                error={formik2.touched.name && Boolean(formik2.errors.name)}
                                helperText={formik2.touched.name && formik2.errors.name}
                            />
                            <TextField
                                fullWidth
                                id="lastName"
                                name="lastName"
                                label="Apellido"
                                type="text"
                                value={formik2.values.lastName}
                                onChange={formik2.handleChange}
                                error={formik2.touched.lastName && Boolean(formik2.errors.lastName)}
                                helperText={formik2.touched.lastName && formik2.errors.lastName}
                            />
                            <TextField
                                fullWidth
                                id="numberCard"
                                name="numberCard"
                                label="Número de tarjeta"
                                type="text"
                                value={formik2.values.numberCard}
                                onChange={formik2.handleChange}
                                error={formik2.touched.numberCard && Boolean(formik2.errors.numberCard)}
                                helperText={formik2.touched.numberCard && formik2.errors.numberCard}
                            />
                            <TextField
                                fullWidth
                                id="expirationDate"
                                name="expirationDate"
                                label="Fecha de Expiración"
                                type="date"
                                value={formik2.values.expirationDate}
                                onChange={formik2.handleChange}
                                error={formik2.touched.expirationDate && Boolean(formik2.errors.expirationDate)}
                                helperText={formik2.touched.expirationDate && formik2.errors.expirationDate}
                            />
                          
                            <Button color="primary" variant="contained" fullWidth type="submit">
                                Submit
                            </Button>
                        </form>
        );
    }




    return (
        <div style={{display:'flex' ,width: '100%' , justifyItems:'center', alignItems:'center' , flexDirection:'column'}}>
            <Box
                sx={{
                    width: '60%',
                    m: 1,
                    p: 1,
                }}
            >
                <Grid container  spacing={2}>
                    <Grid item xs={3}>
                        <Box
                            sx={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                            }}
                        >
                        {renderTitle()}
                        {renderIcons()}
                        </Box>
                    </Grid>
                    <Grid item sx={{ gap:'18px' }} xs={8}  >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Grid container  >
                            <Grid item  sx={{ display:'flex', flexDirection:'column', height:'100%'}} xs={7}>
                                <img src={roomSelect}/>
                                <button
                                    onClick={handleClickOpen}
                                    className=" mt-7 w-4/5 bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg">
                                    Reservar
                                </button>
                            </Grid>
                            <Grid item xs={5}>
                                <ImageList sx={{ height: 400 }} cols={1}  rowHeight={164}>
                                    {rooms.map((item) => (
                                        <ImageListItem key={item.img}>
                                            <button onClick={() => setRoomSelect(item)}>
                                            <img
                                                className='hover:scale-105 object-contain '
                                                src={item}
                                                srcSet={item}
                                                loading="lazy"
                                            />
                                            </button>
                                        </ImageListItem>
                                    ))}
                                </ImageList>
                            </Grid>
                        </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            {renderDialog()}
        </div>
    );
}
