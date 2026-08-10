def hex_to_rgb(hex):
    hex = hex.lstrip('#')
    if len(hex) == 3:
        hex = ''.join([c*2 for c in hex])
    r = int(hex[0:2], 16)
    g = int(hex[2:4], 16)
    b = int(hex[4:6], 16)
    return r, g, b

def rgb_to_luminance(r, g, b):
    r, g, b = r/255.0, g/255.0, b/255.0
    r = r/12.92 if r <= 0.03928 else ((r+0.055)/1.055)**2.4
    g = g/12.92 if g <= 0.03928 else ((g+0.055)/1.055)**2.4
    b = b/12.92 if b <= 0.03928 else ((b+0.055)/1.055)**2.4
    return 0.2126*r + 0.7152*g + 0.0722*b

def contrast_ratio(lum1, lum2):
    if lum1 > lum2:
        return (lum1 + 0.05) / (lum2 + 0.05)
    else:
        return (lum2 + 0.05) / (lum1 + 0.05)

# Dark theme
dark_bg_primary = '#0f0f0f'
dark_accent_gold = '#d4a843'
# Light theme
light_bg_primary = '#faf8f4'
light_accent_gold = '#b8912e'

def check(fg, bg, label):
    fg_rgb = hex_to_rgb(fg)
    bg_rgb = hex_to_rgb(bg)
    fg_lum = rgb_to_luminance(*fg_rgb)
    bg_lum = rgb_to_luminance(*bg_rgb)
    ratio = contrast_ratio(fg_lum, bg_lum)
    print(f"{label}: {fg} on {bg} -> contrast ratio: {ratio:.2f}")
    return ratio

print("Dark theme:")
check(dark_bg_primary, dark_accent_gold, "bg-primary on accent-gold (button)")

print("\nLight theme:")
check(light_bg_primary, light_accent_gold, "bg-primary on accent-gold (button)")