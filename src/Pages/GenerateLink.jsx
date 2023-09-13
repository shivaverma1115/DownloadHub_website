import { Box, Button, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const GenerateLink = () => {
    const [toggle, setToggele] = useState(true);
    const handleToggle = () => {
        if (toggle === true) {
            setToggele(false);
        }
        else {
            setToggele(true);
        }
    }
    
    const nevigate = useNavigate() ;
    const handleLinks = ()=>{
        nevigate('/links')
    }
    return (
        <Box minH={'100vh'} w={'60%'} bg={'white'} m={'auto'}>
            <Flex fontSize={20} fontWeight={700}>
                <Text p={10}>Forex Tuner</Text>
                <Spacer />
                <Image src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhIWFhUXFxcXFRgYFxUVFRgYGBcdFxcYGBgYHyggGRolHRYVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGxAQGy0lICItLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAHYBrAMBIgACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAQIDBwQFBgj/xABIEAABAwICBQkECQMCAgsAAAABAAIDBBESIQUGMUFUExUiUWFxkpPRBxcygRQjQlJykaGxsjPB8FPhJIIWJTVEVWJjdIOz8f/EABoBAAIDAQEAAAAAAAAAAAAAAAABAgMEBQb/xAAzEQABBAAFAwIFAwQCAwAAAAABAAIDEQQSITFRFEGhE4EFIjJhcTNC8JGxwdFS8QYj4f/aAAwDAQACEQMRAD8AtXWPTzaMMc5hfiJGRA2C+9aP3hs/0HeJqT2n/BB+J37KvbrdBh2PYCVlllc11BWF7w2cO7xNSP8AaKwf93f4mqv7pD1K7pI+FUZ3rvveTHw7/E1HvJj4d/iaq3dkmRSh2xHTw2Bztqm2SYtLxsN/fZWX7yY+Hf4mqKf2nRtF/ozz/wAzVXl1j1p6PzCmMJFe3lV9Q/lWJ72I+Ff4mo968XCv8TVVqFZ0UXHlPqH8q0vevFwr/E1HvXi4V/iaqsQl0cPHlHUP5Vp+9ePhX+JqPevFwr/E1VYhHRQ8eUdQ/lWn714uFf4mo968XCv8TVViEdFDx5R1D+VafvXi4Z/iaj3rxcK/xNVWIR0UPHlHUP5Vp+9eLhX+JqPevFwr/E1VYhHRQ8eUdQ/lWn714uFf4mo968fCv8TVViEdFDx5R1D+VafvXi4V/iaj3rxcM/xNVWIR0UPHlHUP5Vp+9eLhn+JqPevFwr/E1VYhHRQ8eUdQ/lWn714uFf4mo968XCv8TVViEdFDx5R1D+VafvXi4V/iaj3rxcK/xNVWIR0UPHlHUP5Vp+9eLhX+JqPevFwr/E1VYhHRQ8eUdQ/lWn714uFf4mo968XCv8TVViEdFDx5R1D+VafvXi4V/iaj3sR8LJ4mqrF2mj9SWvixOl6Tmtcy24EX6QKqlgw8Ytw3/Kg7FPaLJW/968XCv8TUe9eLhpPE1V1pjRMlM/BJbMXaRsI/t3LBVjcJA4W0aflSGJeRYKtP3rxcNJ4mo968XDSeJqqxCfRRceUdQ/lWn714uGk8TUe9eLhpPE1VYhHRRceUdQ/lWn72IuFk8TUe9ePhZPE1VlT0r33wNJtt/wA61No6IOkY0g3xC97WtvSODh48oOKeBdqzIPalG42+jP8AE1T+8qPh3+Jq47SGrjo3Yg0i43ZjP+61T2kGxUDhYjsPKgMY53fwrG95MfDv8TUo9pEfDv8AE1VtdSQ9aXSxceVYMRJyrJ94TP8AQd4mpPeGzh3eJqr66S6XSR8Kfrv5Vhe8Nn+g/wATVs9H62MkaH8m5ouRtB2G1zbvVVXWfR6WfG3CGtIuT0gTt27+xQfhW18o8pidytAawMyGA3OztsbGx+S3bVTg1il24Wbeo32k5Z9quFmwdyySxGOr7rRHJmtcP7Uj0IPxO/iq8urC9qh6EH43fxVd3W/C/pj3WWf6ynXUkDhib13H7qG6Qbb71e4W0j7LO8ONZVuaqnjcJHEZhvR29RO5aPVqlE0zISbB8jWkjbYncsl9U/C4X27cli0Ephe2SPJzSHA7cx3rmYXCTRG3uBrbX7fwrpdVEMO6IA2av2Xc0erdJUFwjbJHyUxjf0sXKBrS64vsJsotD0lNKZTDFLEeRnacXSYSBYEOI+LbcLmIdO1DMWGTCXScq4gC+Pr7B2LIm1qrHG/Ki+Fzfgbhs/4srbctq1GGXa/KyCRnC3DtUKSSSajjEjJYWxOMpfcPx2uMNrAWutbprQlJyVVyDJI30kjWOc92JstyWnLccr5dYWlm1gqg+WQyWdM0NkIa0XDdlssilrtaquZnJySYm7xgZ0srXcQOkbb9ytbDKCDflIvZWy0yEqRbCqEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEIQhCEJUiEIW70NQwPil5V1pbfUjFhubZZb7mwXbavaGkZEG36YAIuSbdYt+S5zVTSFN9HmiqMILekxxti2ZBp6wQPzXQaH1g5MDlHDMA5kXGW7rC5GLLnOyV3WaUBzmtPdab2gxHlo34C5jW9K2Q23sTuXGuF7m1hu9M9q7rWzTDHjDHIHA/Hbq3g9q4R+3f89q2YKxEAQrYrDaKRCRC1qxKhCRFIWdo+U3DA/Bf4jmR2nL9l3dJq+yFjZ6cNqDte85u/wCUbGj9VX1I03yNhvW5oNJyQEGNxBtn1H5bx3qmUE7FJwsUu6pa7G5gjJL8Y5RrhYtaNwWp19pWNEcgaA5ziCdlxa+awJtaZXva5uBhFsRAtitn0jtt2BN1h082qjjbhLXtcSRtbstkVQ1jg4FJgNG1oFPEcljqZhyV5U27qS6Lpt0XSU066Lpt0XQhPur5ZsHcFQl1fTdg7gsON/b7rVhu64f2q/BB+J38VXV1YntX/pwfjd/FVxdX4T9Ie6qn+tPui6jurL9n2lWzM+jGFo5KMdI2JdnbZZWTSGNuarUI25jSrdxyWOSrW0NpRlTXPj5FrREyRu44um0X2ZHJZug9WuRqKidzmPbK67W4fhGImxvlv3Kg4vLoRWgU+nzbFU6hW3qZC0xVBDGEipmDbjLaLC9jYLkPaViE8bXMYw4D8BJBu7abtGeSmzEZ5MlKLocrM1rkntuLFYEseE9iumjo2VtJSSBrbtkjc/IfYu117doWw0loiOaamla1pEUkmKwFvhIse5wCgMaAaI5UumNWqFQ5pG0Ed4Vz6MoIJ62qqXMa4QFsMYsCAWsDnOA2Ekki/YmaB0zT6VE9O+mwhgG2xycSAQbXa4YVYcZ3y6Df3R0/a1TSFcupVByVHMxjGSPZPM1mKwBwkAAusbLG1xpacT0BLGNndPEHNbbNpIxX623yuUDG/Plr+VaXofLdqo0Luva/E1tTEGgD6o7AB9pdfprTEVFT0znU7ZBIGNdYNBHQBJzGfcpdScrSG2XX4SEOpBOypZCuOu0bT0tdS1EbGtbUYontsA0ktxNdbcbi3zW30doeOGepmc1oEskYZcC3wgWHe4qs44VdfhSGHPKoZIrjrqFlBR10pa27nyGO4B+OzWgX7SsfWOBgpNHkNFzLTA5C5uBtUhjMx0bodEHD13/lqpEhV4ab0xBDVQ0b6Zr2zfas02JNhdpGaw9F6Ahp9KPbGxoY+nxhtgQ13KWNgdmxIY3Sy3tYR0/BVOIVre05r20hBiia0ytALSce8i4wjq61jeyWBroKnE0Gzha4B+x2qfVf+r1K77KPo/PltVmm3Xb+yuNrq6QEAjk37Rf7TV0vtMY9tI+8UQaZGAOaTj+K4ywgbrbU34nLKI637pCK2ZrVSJSrv1V0VFTUsEEjAZJQS67b9IjE4E7rA2XMak6IEGlainc0ENjcW3F+iXNLTn2FRGNac2m3kKXoHT7qtkK56GspdITVNDJStHIlzcVgbgOLLggAtdldLqLo4R00sYax7mTzNaX7DYgC5sSonG03VuunlMYezuqXRdXPTsJ0qGSRRi1KTZnSbnIM82jNZWsVJE6lqDVwxMa3FybhYm1ug7YLOvuR1uoGXekdPodVRyc11jcJoSrcsyztHSRmQGf4QOr97btq2GmKuEswscMQPRw3w2vs/K3zWiJ3JqqdEC4OvZFAkHhOdKSLEpAetIlbtVh0GiY3WsOm4up/hKy2TuOynqD1WhkP9lpIs4mbrNtlv27V6p0NG0QxODQCY2C9gCeiN65b8TK0A3v9ltELCSF5zxycNU+RJ6IEknDVPkSei9IR1rzJJHg+AAtdfJ193YpNH1bpGBzmYDndpNyLGyr62XkKw4Zi87Mq3AWFLVeRJ6IdXuAJNNUgDMkwSADrJyXo2qq2xsdI82a0XJ25fJcTpbX+jljmp4hO5745GAchIG3LCM3OAACQxMx2/somCMbqsYpA5ocNhAI7jmnrFoGFsUbTtDGg/ksi66jNWgrA4UT+U8FSRnJY91LE7cpFAU10XTLpLpKSkQo0IQpLq/mbB3Befbr0FF8I7gufjf2+614XuuE9rJ+rg/G7+Kra6sf2s/04Pxu/iq3WjCfpD3VU/wBZT7rf6mafZRySPe1zg5oaMNtoN9651bii1bnlpnVbSzk24rgk4ujtsLK2UNLafsVBlg2Fn6A1jZT1c1S5ri2THYC1xidiCn0HrVHBVVNQ5jy2Y3aBtHSvnc2Wuq9VKiOm+lnAY8LXZElwDt5Fu0XUOmdXpqaOOWQsLZPhwkk/Dizy6lSWQuNXvp/RSuRvst7oHXOCGOaOSJ7hJLI+wtbC/cblaPWrStPUOYaeHkg0HELAXJNxs+f5qLQegJ6xxbE0WHxOcbNHZfee5Z+ldRamDAS6Nwe9rAQ4ixcbC4I2Z7kg2Fkl38yCZHMqtFman65Mo4XQyMc7pFzS21gCBcG56x+qn1c17bBG9krHOc6R7wRa3TOI3ueu65jWDQUtG9rJS0lzcQwkkWBtvAW10TqHVzsEnQjBF2h5OIg7DYA2+aHxwFpc47oDpbAHZY+retr6OZ73NxslN5ADY4r3xN3b9hW/qvaLTRsf9Epi2R9ySWtY3EftOw5uXMaQ1TqY5o6Z4aHSG0brnAT32y/JRT6n1DKplEXR8o9uJpDjhtntNr3yO5SMcDzmJ+/sENdKBQ/C2mgtdhT0ckBDzM90jw8Wwhz7EE532qXTWuNNUuppjC9s0EjHEjDYgEF7duy4yWsp9Rap88tMHRY4gxzrudhs8XFjhRpfUStp2GVzWva0XdgcXEDrsQDZGXDZ7vU/5FJ3Ll2XQ6X17oahjg+kc55Y5rXODCRcZZ3vtKlb7RKMxxtkpXvMYbhuGGzgLXF9mxV7ojRz6mZkEZbieSBiNhkL527l0tV7OK5jS/6p1gTZrziNuq4CT4MOymuPlDZJHagLC1m1ulq5o5Q0MbE4Ojbe+YINyevILe6ze0FlRHG2KN7S2Vkji62eA4gBY9YC5LV/QM1ZKYYbBwaXOLiQAAbZ2BzuUumdAzUs7aeXDicGlpBJaQ42GdutWGKCw3uOygHvAJ5XRa867MrYGwRMezphz8VswAbAWPWb/JO0rrnFLBSwiN4MD4XOJtYiMWNs1q9L6lVVMYuUwESvEbS0kgOdsxZZXT36i1QqRSYouUMZkBxOw4QbbcN7/JQDcPlAB2sqRMtnRdVN7SKQuEv0V7pGizXEMuB2HctHojXsiskrKhhOKMRtaz7IDrgZnPetfQakVUr5o28mORdgc5ziGF1rnCbZ2UUWqM76eWqY+J0cXKYiHOueT24ejn2JCPDCxf8ACmXSnVbTWrWeiqYXMipSyRzg7GQ2+25zGeaj1D1tioWSskje7G4Ho2tYNtndYFZqdUx0orTgMZa19mklwa4XuRbdfNRaY1UqKZkT34HcqQGBhLnXIuBaym1kBb6YOl+Ui6TNmIXTwa7UUdQyeKlcwBj2uDQwElxaQcj/AOU/mjSWuOjpszSODi9jy6zMRwuDjnffaywKb2Z1jmYy6Jpt8Jc7F3GwsCuSrqR0Mjon2xNJabG4uO1QZDA8/KTp90GSRo1CsCu9qT+UbyMLRFliDwS/bnhLXW2Idr7S/TBWCGQHkTE4dHPpBzTt3dJVwhW9HFwo+u9WTVe0iFjXmlpcMjyS5zsIGI/adhzcc1g6ra6wwUzoKiN8hfI97yMNjjscwSuEQjpIstI9d92u/ptdKOKqFRFTOYwROYWtDQSS4OB29idLr5BNDNT1MUj2Pc4sIw3a0m7b3O1p3qvkI6SL7o9ZyCgLJoqF8pIYL2zO7uTqLRc0snIxxlzxkQPs/iOwDvV/qNsixY3+yh6bqBo0dAsRKug0nqdUws5SzZGgXfyZLi3ruLAkdoutYdHyOi5dsR5PEW4gb2ttB+agJmEWCKUvReDRGqwUrdqTCnsGasdsVWN1zsH9Fv4fVeoabD9FhxXtgjzAvY4dvYvLlORyLevD6r1Voll6eEEXHJs/iFxJ/oC6Uf1FLUON7BxFhlZRSRxuljc5zhIAbbQHA9e42WSIX9IYjn8PWEQU5s0ydJ4+1s/RZxtqrSTeixtYmE00ga0PJtZpNg44hYE7lzFHSTOJY/R7GEA58oHC/YQf7LrtK/0XX2XZ/MLVxaZg2cqBfK1j3b1bG9wBof3/AMKmWNriLNf0/wBKlRsHcP2QgjZ3D9k5jd67Mf0hc925CGsWUymdiDAx2I7BY3N+xNppcLg4bRmOq6tRseTXixeWgF1hi2bj1dy5vxH4j0lHLd/3W3C4UTXrSryq0BURsMj2AAZkYgXAdZA2LVXVpyx7nDb1/wCZrSHU9jpWPafq8QL2neN4HouZgf8AyAPcWzjLxX9iteI+GZQDEb5tcPdLdT6Up+TmkjtYNe4Duvksa69K05gCO65JFGkt16Ei+EdwXnq69CxfCO4LDj/2+61YXuuC9rX9OD8bv4qtVZPtdP1cH43fxVZ4lfg/0h7qqf6ynKydW/8Asafum/ZVpiWbBpmdkRgZK4RuvdotYh23crJozIAByoRuDTqrfoauNlJSxy/DMxseey5jvY99rfNc97VIg2npmDYHlo7gyy4KfTVQ9jYnSuLGWLBuaW/CRluRpHTVROGtmlc8NN2g2yPyCzswrmvDrVrpgWltKxfZ0/FQyRxOAlxP7wSOie5aF2iNIRy0r6oucwVDPt48Li4C5tsBz/2XJ0GkZYHY4ZHMd1tO0dRGwhZlZrNVy4cc7zhIc0dFoDgbg2aMyFMwPDyRVH7KPqAtF9l3evugp56iGdkYdHG0cocTRkH4jkTc5dS2GuNHVVEcLqF+V8Rs8MuCBhdfeB1dqraTWutcC01L7EWIy2H5KDRuslXTt5OKdzW7m5OA7g4G3yVYw0oAOny7fhSMrLO+qtTWSpZGaJsrhynLsN+5pDj3XIUddoWZ2lYasNHJNjIc64uDnlbbvVRV2kJZn8pLI57+txv8h1fJZzNbNINZyYqn4bWHw4rfiIv+qBhHgfKReoPuj12ndWfoSQO0pXWN7MgB7w3MJmqlNVU0VS+uf0MRcwOfjwtzvnuBuMlUlDpepgc58Ur2Of8AGQbl1uskHr/VGkNP1U4wzTyPb90no/kMipHBO2sVp4QMQANtVtdRHA6ShI2F7yO7C636WVwiIl84ax0Zc1tpSQ5rjYgFrb5Ye4Lz9R1b4niSNxY9vwuG0blsp9a657S11VKQcjmBf5gKeIwzpHWD9lGKYNbqrI9n2iHQU00xc0SSPeGvdssxxa13cSCfmEe0bRfKR09ULF0UjA8jYWucAT3B37lVfPp2pfEKd0zjELWZkGjDs2DcnQ6wVTIuQbO8R/cyI233jrUOlkz57T9ZuXLSvWvnhfI2kk+JzeVZ/wDG8HLtBsVqakf9cx/+0d/9iqGfWKqe9kr53l8d8Dri7b7bZJ7tZasyif6Q/lA3AHZXDb3I2bLqLcE9vfspHEA9lbuscRqqSohpH4ZGvc14GRcRm5p6sVxmuf1YaRoOpBFiG1At1dHYq+ptYaqN75GVD2vkN5CCOkRvPb2pztY6ssfHy7sEly9vRAdi+K4tvUm4R4blvuD/AESMwJshXHo6rijoqOOX4Zo44s9l3RXz78JHzWLrOY4ZdHB+TGzFtzu+rLW3+dlUVRpuokjZE+ZxZGWljbizS34SLC+SXSWnamoAbNM6QNNwHEZH5AJNwRBslBn0qldk9HI6rxvD3RFjRGWPLWsdd2MuAcL36PWqf11omQ1s0UbcLQRYZnaATme1Nptb66NgjZUvwgWF8LiB1AuBK1NVUvkcZJHF7ztcTcnvKsw+HfG6ye1d1CWQPGgUaEXSXW1Z6SoRdF0IpCVJdF0J0svRkxbIwNJF3NabEi4JsRcbNquSKhjjbgiDWMH2evtLtrj3qoNFyRumjMrgwNLdjbA4TvVkTaTp7uDpCBhNzfom/Wexed+LS08MAP8Av/a73wuElhfe3GtD8dlmV2nBE2zCL7iLlzj1C4yCn1fpyInF+2RznkG32tuQFrdi5OStja20RLhuJ3Z7QloNYZYLlxxN2kOP7HcufDFMQc2x7a87rdO6AAZNTvfsuEqj03d7v3KayNx+FpJ/un1b7kOtYuuf1NioQvXi8gH2C8sazkrQw6Lqw0N+jP78lb1B7TJI42M5qmJa1oJxszsLX/RcG2PrTwwLA7Budpm8LQMQB+1WB7033vzVPf8AGxP968n/AIVP42KvQB1JVDoD/wAk+qHCsOH2kPneyB2j5YmvewGRz2YWDGDc9mS7vA1wPSBFtx/3Xn82SssNmXcSP2T6F3/LwjqRwpQDkSOpPBUMaeStzQQACsx1NhSh/WL/AOdisHU+srHtBka0xW6D3XDurLrGSrsFb7RGts0EfJABzQLMv9lYviEDpoqY0E/f/C0YWRsbrcaCseumjjbile1oyvfZ8guU0nrc0NcKdrnFtvrNjRnvHUbZLj63Sckzi+Vxd1C5ACxnSbbXAO6/+XWLD/BY2uzSGz4WiXHuIIZoFJUTue4veSXE3JKYo7pcS7gAAoLnFPXoaP4R3BedsS9Ex/CO4LBjt2+61YbuuA9r/wDTp/xu/iqyurL9sR+rp/xv/iqvxK7CfpD3UJh86lurE1H1YppKX6VLGZnEusy+wNNrAXAxd5VbYlYWolZSRRAmtdFLixPYThYQPs4XAgg/eGaMUXenoiIDNqkfq3S1NeIIWSRRsZjmBBaduTWB2Y7++y3TNEaIkmdQtZaZoN7YwbjbZ5yJHUsLSGvNOyvjfH0ohG6OR433IILfvAW/UrOjrtERzur2zNMjgSQHEm5GZDNzisjjJpd7aflXgN7Utfq5qbAKipgnbygjwFhu4HC4Ej4TtyTNJ0mioJIxJTSsa4PvibKLkYbWz7/zUureuEDqmqnmeIg/AIw7bhYCB89/zXE6e1hmq3N5ZwcGF2CzQMiRfZtyAVjWSOec11Q7/ZQcWtbou/1i0PoqkjDpITdwOCxkNyBcXsctySr1LpHy0j4orRPxGQYn9IFgczO+X+60vtK05T1EcDYZWvLScQG7If7rc6s6408dAxssoEsbHNDT8Rwg4Ld4sFXlkawOF37/AIUvkLqNJ82otN9NjDYvqDE8ubid8YcAM79Tv0XPaC1ep6nSM8bY/wDhoSRa7rG3RGd75kOPyXQaF12gbQgyyjl2xuGE/EXC4b+eS12qGnqSjo3vkeHzSEvfGPjO4Nz7yfmmDK0G7vZIhhI/qtb7RNW4qYRTU7bRvu02JcMWbmm/aL/kuq/6HaOAhDqZxdKALtMlgcN7uIPRC12lNYqCs0e+C4gcB9XG7aCzNhFtx2fNbU67UrDTMErXNIwy2v0LNFiey+SRMuQDWxaAGZifwtFozU2lGkp6V7ccTYWyMBc4Fpc61iQc1h6+6Eo6enxQ00kb+UDQ52LCRnexLt9ls9E6Vo4dIz1H0pro5YwQ4kkh2IXZf5XHesbXvSlLNTnk6wyuxhzWXFhmb2s0bAVJrpPUbZNacoLWhh27qsrre6D0a145R4uL2aN2W9as26lvNBVTcPJk2IJt2grrxkZtVxviJkbBbL37cLc0+ig8PLY2kMF3ZDIf4FGNHiwPJCxyBw5HuyW00PpBsXKB7MbXtDSAbfr81sjrIzk2xiKwaW5YtzTcfPYh8krXkBlj/wCLhxMhcwF8pB1sa3f/AEua5sztyIuNowZ/smyaNDc3RADtZb+y6es1mxh4a3C5zQ0HFmLE5/qoNL6eE8Zjw2u5pFze1gAR/nWoslmJFs0/KlJHh2tOWYkjbfVYI1VkLmt5Ft3AkfDawt6ha92jR/pNte18IIve1r2XWRa32sMGy28XtbMfMhYrdZAI8HJZ9/RtixXt97tVbZcT3YD/AAq6SLBn6ZnA68niv8rnuav/AERkLnobvyWO+iiIsWN/ILr4ta7OkJYSHG7cx0Ra1u6+fzXMPkGZNhvO4LRC97rztpY5wxlGGQu3504XI6Wo+SfhHwnMeiwbrYadrBJJ0djRa/Wd61qi4i16fC5zE0yb1qnXRdIi6javpOui6ZdF0Wik66kEzh9rYoboukQDumLCzIq0t2ZfhJA/LMIkrS7bc95v+mxYl0rQo5W70gl1ValsXZnPtUgTQUYk8ySddKQRmQbHYkauz1XhiqR/xDcQYQABk05bXW//ABZ55zEM1WFpw+HE1gHXsuRbA+wfhOG9sVjhv1YtiZnt3KytI6VYy8bAHM2YMI5O3Vh+0e1cWNHZSOecLBd4Y057bA22WtkssXxJj7BGy2TfB5Ymh3Y86V+Vp08BOmc0m7W4RuF7pl10ATW1LmPaAaBtPulCjxIxJ2lSfiS3UeJJdJFKW6LqK6TEnadKa6S6iuluhFJ5K9HR/CO4LzfdekI/hHcFz8d+33WnDirVe+2Q/V0/43/xVXYlZ/tnP1VP+N38VVeLtV2F/THuoS/UpbpLqPEjEtNqtPuluo8SMSLSoKXEkuo8SMSSakuluosSMSdoUl0XUeJGJFoUl0XUeJGJFpUFJdJdMxIxItOlLdF1Fi7UYu1FpKSRxO8/mVjFrus/mVLi7UYkrSyhRiN33nfmUojP3j+ZT8XajF2otPKEwxn7x/MppY77zvzKlxIxIspZQoAXfeP5lSNJO0n8ynOASEqQKMoTgAi6ZiHWEuIdiVpp10hATcQ7EYh1hFoSOamqTEOxRkdqaEoCcGIDh2JcSVoSYAnNyTbpUWhOxJwUYTsSVopSXXXalHoSfiH7LjcXathonTD6cnCQWna07+1ZsZE6SItbutuBmbFOHvXQ8k5z3WvtOfVn1ncnHQ4jY8l5c6YYbgFzRncbNq0Ffpx0l2joM+63L80ujNPyQkWdibvDrfouXBgZ42ktOp7Lu4v4thp3ta4aC9fyK/Kx66gkhNpG2zyO49xWLdbPTenXVFgbBoNwFqcXauzC55YM4orzc7Yw8+mbClukuo8XajF2qy1UpbpLqPF2oxdqLQpLouo8XajF2otFKW6S6jxdqMXamilJdelI9g7gvM5f2r0zH8I7gufjv2+60QaWoaukjfblI2vtsxNDrd11DzLTcPF5bPRCFhGi0UjmWm4eLy2eiOZabh4vLZ6IQmikcy03DxeWz0RzLTcPF5bPRCEIpHMtNw8Xls9Ecy03DxeWz0QhCKRzLTcPF5bPRHMtNw8Xls9EIQikcy03DxeWz0RzNTcPF5bPRCEIpHMtNw8Xls9Ecy03DxeWz0QhCKRzLTcPF5bPRHMtNw8Xls9EIQikczU3DxeWz0RzLTcPF5bPRCEaopHM1Nw8Xls9Ecy03DxeWz0QhCKRzNTcPF5bPRHM1Nw8Xls9EISsopHMtNw8Xls9Ecy03DxeWz0QhNFJOZqbh4vLZ6JeZabh4vLZ6IQlZRSTmWl4eLy2eiOZaXh4vLZ6IQiylSOZqbh4vLZ6I5lpeHi8tnohCLKKS8y03DxeWz0RzLTcPF5bPRCEWUUjmWm4eLy2eiOZabh4vLZ6IQiynSOZqbh4vLZ6I5mpuHi8tnohCLKKRzLTcPF5bPRHMtNw8Xls9EIRZRSOZqbh4vLZ6I5lpuHi8tnohCLKKRzNTcPF5bPRHMtNw8Xls9EIRZRSOZabh4vLZ6I5lpuHi8tnohCaKRzLTcPF5bPRHM1Nw8Xls9EIS1RSOZqbh4vLZ6I5mpuHi8tnohCNUUjmam4eLy2eiOZabh4vLZ6IQmikcy03DxeWz0RzNTcPF5bPRCErKKSDQ1Nw8Xls9Fn2QhBRVL//2Q==' />
            </Flex>
            <Flex color={'white'} fontSize={15} fontWeight={700} bg={'#041982'}>
                <Box p={5} >FOREX TRADING</Box>
                <Box p={5}>HOW FOREX WORKS</Box>
                <Box p={5}>TIPS</Box>
                <Box p={5}>TRADING GUIDES</Box>
                <Box p={5}>CONTACT US</Box>
                <Box p={5} fontSize={25} ><BiSearchAlt2 /></Box>
            </Flex>
            <Flex p={10} >
                <Image src='https://s0.2mdn.net/simgad/13940993896144300140' />
                <Box p={20} >
                    <Image src='https://s0.2mdn.net/simgad/13305134976963913202' />
                </Box>
            </Flex>
            <Box m={'auto'} w={'fit-content'} onClick={handleToggle} >
                {toggle === true ? (
                    <Button fontSize={40} p={10} colorScheme='messenger'>Generate link</Button>
                ) : (
                    <Button onClick={handleLinks} fontSize={40} p={10} colorScheme='messenger'>Downlord</Button>
                )}
            </Box>
            <Text p={10} fontSize={35} fontWeight={700}>Top 10 Forex Risk Management Tips For Beginners</Text>
            <Flex>
                <Box p={5} w={'70%'}>
                    In this article, we will be discussing some of the top forex risk management tips.
                    This is actually one of the most effective ways to manage fire risk. With forex
                    risk management, you will have a clear picture of what your forex exposure is and
                    therefore be able to make quick decisions as to what to do in order to reduce the
                    risk of fire losses. There are numerous more risk management tips available in
                    many sources. It would be better if you could utilize an online forex risk
                    management calculator or a forex risk management tool so that you can get a
                    complete overview of forex risk management.

                    The forex risk management calculator is very useful because it takes into account
                    not only for market volatility but also the forex trends and movements. These
                    calculators will help you analyze for trends and movements. Once you learn how to
                    interpret these movements, it becomes possible for you to make more trades based
                    on forex predictions. With a forex risk management calculator, forex traders can
                    enjoy significant amount of forex profit.

                    Most forex risk management calculators will require you to enter in certain
                    parameters. These can be the level of risk involved and the volatility of the
                    forex market. When you enter these values in the given fields, the forex risk
                    management calculator will calculate the amount of profit or loss that you can
                    expect to receive. These forex risk management calculators are designed
                    specifically to give forex traders the information they need to make more trades
                    with high profit margins. This tool is very convenient because all you need to do
                    is plug in the values and the forex risk management calculator will tell you
                    whether you are making profits or losses. You can also use the calculator to
                    confirm your forex trading decisions.

                    Most forex risk management calculators will not allow you to trade forex with
                    leverage. This feature may seem a bit strange to you, because fire is an
                    investment that involves using leverage. However, if you want to increase your
                    chances of making high margin forex trades, then this is the tool for you. There
                    are more risk management calculators that allow you to enter higher amounts of
                    money as leverage. It is important that you know that even these leverage
                    calculations are only approximate so you should never base your forex trades
                    completely on them.

                    Another forex risk management tip is that forex traders should always use stop
                    losses. Although it may seem like an unnecessary step to take, it will reduce the
                    amount of forex losses that you will incur. By knowing when to enter or exit the
                    forex market, you will be able to minimize your forex risk.

                    You should also learn about leverage and forex risk management with the help of
                    forex risk management calculators. Forex is a volatile market that has both
                    short-term and long-term trends. Learning how to manipulate these trends to your
                    advantage will greatly increase your chances of earning huge profits. It is
                    important to know which trends to follow and which trends to avoid in order to
                    stay out of forex risk. If you are able to understand the complex mathematical
                    algorithms behind forex risk management calculator, you may just be able to tweak
                    it to your own strategies.

                    Leverage is one of the most common features of forex risk management calculators.
                    However, there are also other factors to be considered. One factor is price level
                    difference. Another factor is the size of the market. And the third factor is
                    country involvement.

                    It is also advisable to keep up with the latest trends. This will help you stay on
                    top of your competitors. Keep updating yourself with more risk management tips and
                    you can definitely get the edge over your rivals. Remember, forex trading is not
                    an instant process. Hence, you need to be patient and make proper strategies to
                    gain success in forex trading.
                </Box>
                <Box w={'30%'}>
                    <Box mt={10} >
                        <Image src='https://s0.2mdn.net/simgad/2587496023881857187' />
                    </Box>
                    <Box mt={10} >
                        <Image src='https://tpc.googlesyndication.com/simgad/3806367709832810825' />
                    </Box>
                </Box>
            </Flex>
            <Box m={10}>
                <iframe width="371" height="207" src="https://www.youtube.com/embed/KRf4HPH5SEE" title="10 Forex Risk Management Strategies You Must Know" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Box>
            <Box bg={'#4285f4'}>
                <Text display={['box', 'box', 'Flex', 'Flex']} fontWeight={500} fontSize={18} bg={'#4285f4'} w={'fit-content'} m={'auto'} my={4} p={2} color={'white'} textAlign={'center'}  >
                    2023 @ DownloadHub.singles All Rights Reserved.
                </Text>
            </Box>
        </Box>
    )
}

export default GenerateLink
