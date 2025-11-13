
import { Box } from '@mui/material';
import { 
  ReactIcon, 
  TypeScriptIcon, 
  NodeJSIcon,
  VueIcon,
  FastApiIcon,
  DjangoIcon,
  MySQLIcon,
  MongoDBIcon,
  GraphQLIcon,
  GitIcon,
  AWSIcon,
  DockerIcon,
  QuoteIcon
} from '../../assets/icons/icons';

const iconRegistry = {
  'react': ReactIcon,
  'typescript': TypeScriptIcon,
  'nodejs': NodeJSIcon,
  'vue': VueIcon,
  'fastapi': FastApiIcon,
  'django': DjangoIcon,
  'mysql': MySQLIcon,
  'mongodb': MongoDBIcon,
  'graphql': GraphQLIcon,
  'git': GitIcon,
  'aws': AWSIcon,
  'docker': DockerIcon,
  'quote': QuoteIcon
};

const Icon = ({ 
  name, 
  size=24, 
  color='#fff', 
  sx={},
  className = '',
  ...props 
}) => {
  if (!name || !iconRegistry[name]) {
    console.warn(`Icon "${name}" not found in icon registry`);
    return (
      <Box 
        component="span"
        className={`icon-error ${className}`}
        sx={{ 
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: size,
          height: size,
          fontSize: size * 0.6,
          color: 'error.main',
          fontWeight: 'bold',
          ...sx 
        }}
        {...props}
      >
        ?
      </Box>
    );
  }

  const IconComponent = iconRegistry[name];

  return (
    <Box
      component="span"
      className={`icon icon-${name} ${className}`}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        color: color,
        ...sx
      }}
      {...props}
    >
      <IconComponent size={size} color={color} />
    </Box>
  );
};

export default Icon;