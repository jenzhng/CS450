#version 330 compatibility

uniform float uPower;
uniform float uRtheta;
uniform float uMosaic;
uniform float uBlend;
uniform sampler2D TexUnitA;
uniform sampler2D TexUnitB;

in vec2 vST;

const vec4 BLACK = vec4( 0., 0., 0., 1. );

float
atan2( float y, float x )
{
        if( x == 0. )
        {
                if( y >= 0. )
                        return  PI/2.;
                else
                        return -PI/2.;
        }
        return atan(y,x);
}

void 
main
{
vec2 st = vST - vec2(0.5,0.5);  // put (0,0) in the middle so that the range is -0.5 to +0.5
float r = length(st);
float rx = pow(2.*r,uPower);

vec3 rgb = texture( uTexUnit,st).rgb;
gl_FragColor= vec4( rgb, 1. );
}
