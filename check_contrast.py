import re

def hex_to_rgb(hex):
    """Convert hex color to (r, g, b) in range 0-255."""
    hex = hex.lstrip('#')
    if len(hex) == 3:
        hex = ''.join([c*2 for c in hex])
    r = int(hex[0:2], 16)
    g = int(hex[2:4], 16)
    b = int(hex[4:6], 16)
    return r, g, b

def rgb_to_luminance(r, g, b):
    """Convert RGB to relative luminance."""
    r, g, b = r/255.0, g/255.0, b/255.0
    r = r/12.92 if r <= 0.03928 else ((r+0.055)/1.055)**2.4
    g = g/12.92 if g <= 0.03928 else ((g+0.055)/1.055)**2.4
    b = b/12.92 if b <= 0.03928 else ((b+0.055)/1.055)**2.4
    return 0.2126*r + 0.7152*g + 0.0722*b

def contrast_ratio(lum1, lum2):
    """Calculate contrast ratio between two luminances."""
    if lum1 > lum2:
        return (lum1 + 0.05) / (lum2 + 0.05)
    else:
        return (lum2 + 0.05) / (lum1 + 0.05)

def check_color_pair(fg_hex, bg_hex, label):
    fg_rgb = hex_to_rgb(fg_hex)
    bg_rgb = hex_to_rgb(bg_hex)
    fg_lum = rgb_to_luminance(*fg_rgb)
    bg_lum = rgb_to_luminance(*bg_rgb)
    ratio = contrast_ratio(fg_lum, bg_lum)
    print(f"{label}: {fg_hex} on {bg_hex} -> contrast ratio: {ratio:.2f}")
    return ratio

# Dark theme colors from :root
dark = {
    'bg-primary': '#0f0f0f',
    'bg-secondary': '#1a1a1a',
    'bg-card': '#1e1e1e',
    'bg-card-hover': '#2a2a2a',
    'bg-elevated': '#252525',
    'text-primary': '#f5f0e8',
    'text-secondary': '#c4b8a8',
    'text-muted': '#8a7e6e',
    'accent-gold': '#d4a843',
    'accent-gold-light': '#f0d060',
    'accent-gold-dark': '#b8912e',
    'accent-terracotta': '#c4704b',
    'accent-earth': '#8b6f47',
    'accent-green': '#4a7c59',
    'accent-green-light': '#6ba37a',
    'accent-coral': '#d4634a',
    'accent-amber': '#e8a838',
}

# Light theme colors from [data-theme="light"]
light = {
    'bg-primary': '#faf8f4',
    'bg-secondary': '#f0ece4',
    'bg-card': '#ffffff',
    'bg-card-hover': '#f8f5f0',
    'bg-elevated': '#f5f2ec',
    'text-primary': '#1a1a1a',
    'text-secondary': '#5a5248',
    'text-muted': '#8a7e6e',
    'accent-gold': '#b8912e',
    'accent-gold-light': '#d4a843',
    'accent-gold-dark': '#8b6f47',
}

print("=== Dark Theme ===")
# Check text on primary background
check_color_pair(dark['text-primary'], dark['bg-primary'], 'text-primary on bg-primary')
check_color_pair(dark['text-secondary'], dark['bg-primary'], 'text-secondary on bg-primary')
check_color_pair(dark['text-muted'], dark['bg-primary'], 'text-muted on bg-primary')

# Check text on card background
check_color_pair(dark['text-primary'], dark['bg-card'], 'text-primary on bg-card')
check_color_pair(dark['text-secondary'], dark['bg-card'], 'text-secondary on bg-card')
check_color_pair(dark['text-muted'], dark['bg-card'], 'text-muted on bg-card')

# Check accent colors on primary background (for icons, etc.)
check_color_pair(dark['accent-gold'], dark['bg-primary'], 'accent-gold on bg-primary')
check_color_pair(dark['accent-green'], dark['bg-primary'], 'accent-green on bg-primary')
check_color_pair(dark['accent-coral'], dark['bg-primary'], 'accent-coral on bg-primary')
check_color_pair(dark['accent-terracotta'], dark['bg-primary'], 'accent-terracotta on bg-primary')
check_color_pair(dark['accent-earth'], dark['bg-primary'], 'accent-earth on bg-primary')
check_color_pair(dark['accent-amber'], dark['bg-primary'], 'accent-amber on bg-primary')
check_color_pair(dark['accent-green-light'], dark['bg-primary'], 'accent-green-light on bg-primary')

# Check text on accent backgrounds (e.g., buttons)
check_color_pair(dark['bg-primary'], dark['accent-gold'], 'bg-primary on accent-gold (button)')
check_color_pair(dark['text-primary'], dark['accent-gold'], 'text-primary on accent-gold')
check_color_pair(dark['text-secondary'], dark['accent-gold'], 'text-secondary on accent-gold')
check_color_pair(dark['text-muted'], dark['accent-gold'], 'text-muted on accent-gold')

print("\n=== Light Theme ===")
# Check text on primary background
check_color_pair(light['text-primary'], light['bg-primary'], 'text-primary on bg-primary')
check_color_pair(light['text-secondary'], light['bg-primary'], 'text-secondary on bg-primary')
check_color_pair(light['text-muted'], light['bg-primary'], 'text-muted on bg-primary')

# Check text on card background
check_color_pair(light['text-primary'], light['bg-card'], 'text-primary on bg-card')
check_color_pair(light['text-secondary'], light['bg-card'], 'text-secondary on bg-card')
check_color_pair(light['text-muted'], light['bg-card'], 'text-muted on bg-card')

# Check accent colors on primary background
check_color_pair(light['accent-gold'], light['bg-primary'], 'accent-gold on bg-primary')
check_color_pair(light['accent-green'], light['bg-primary'], 'accent-green on bg-primary')  # This will fail because light theme doesn't have accent-green defined? Actually it does not, we only defined accent-gold, accent-gold-light, accent-gold-dark. We need to add the rest for light theme? But the light theme only overrides the three gold colors. The rest are inherited from :root? Actually no, the light theme only overrides those three. So for light theme, the other accent colors are still from :root. So we should use the dark values for the other accents in light theme? But that might be inconsistent. However, the site might not use those other accents in light theme? We'll check later.

# For now, we'll skip the light theme accent colors that are not defined.

# Check text on accent backgrounds
check_color_pair(light['bg-primary'], light['accent-gold'], 'bg-primary on accent-gold (button)')
check_color_pair(light['text-primary'], light['accent-gold'], 'text-primary on accent-gold')
check_color_pair(light['text-secondary'], light['accent-gold'], 'text-secondary on accent-gold')
check_color_pair(light['text-muted'], light['accent-gold'], 'text-muted on accent-gold')