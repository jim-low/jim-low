import { faComputer, faHome, faNewspaper, faSatellite, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Box, Flex, Text } from "@radix-ui/themes"
import './css/style.css'
// @ts-ignore
import JymLogo from '../../../common/assets/jym-high-resolution-logo-transparent.png';

const Header = () => {
    return (
        <Flex id="header" mx="auto" pt="3" justify="between">
            <Box>
                <img
                    src={JymLogo}
                    alt="jym logo"
                    style={{ width: "100%", height: "100%" }}
                />
            </Box>

            <Flex justify="center" align="center" gap="5">
                {
                    [
                        { label: "Home", icon: faHome },
                        { label: "About", icon: faUser },
                        { label: "Projects", icon: faComputer },
                        { label: "Resume", icon: faNewspaper },
                        { label: "Blogs", icon: faSatellite },
                    ].map(item => {
                        return (
                            <Flex align="center" gap="1" className="header-selection-item">
                                <FontAwesomeIcon icon={item.icon} /> 
                                {' '}
                                <Text as="p" m="0">{item.label}</Text>
                            </Flex>
                        )
                    })
                }
            </Flex>
        </Flex>
    )
}

export default Header
