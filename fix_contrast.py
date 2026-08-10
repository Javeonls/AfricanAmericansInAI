import re

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

def check(fg, bg, label):
    fg_rgb = hex_to_rgb(fg)
    bg_rgb = hex_to_rgb(bg)
    fg_lum = rgb_to_luminance(*fg_rgb)
    bg_lum = rgb_to_luminance(*bg_rgb)
    ratio = contrast_ratio(fg_lum, bg_lum)
    print(f"{label}: {fg} on {bg} -> contrast ratio: {ratio:.2f}")
    return ratio

# Current colors
dark_bg_primary = '#0f0f0f'
dark_text_muted = '#8a7e6e'
light_bg_primary = '#faf8f4'
light_text_muted = '#8a7e6e'

print("=== Current Contrast Ratios ===")
print("Dark theme:")
check(dark_text_muted, dark_bg_primary, "text-muted on bg-primary")
print("\nLight theme:")
check(light_text_muted, light_bg_primary, "text-muted on bg-primary")

print("\n=== WCAG AA Requirements ===")
print("Normal text: 4.5:1")
print("Large text (18pt+ or 14pt+ bold): 3:1")

print("\n=== Issues Found ===")
if check(dark_text_muted, dark_bg_primary, "text-muted on bg-primary") < 4.5:
    print("❌ Dark theme text-muted on bg-primary needs fixing (below 4.5)")
if check(light_text_muted, light_bg_primary, "text-muted on bg-primary") < 4.5:
    print("❌ Light theme text-muted on bg-primary needs fixing (below 4.5)")

print("\n=== Suggested Fixes ===")
print("For dark theme, change text-muted from #8a7e6e to something with higher contrast")
print("For light theme, change text-muted from #8a7e6e to something with higher contrast")

# Calculate what colors would work
print("\n=== Calculating Better Colors ===")
# For dark theme, we need a lighter color
# Let's try #9a8e7e (slightly lighter)
dark_text_muted_new = '#9a8e7e'
print(f"Dark theme: try {dark_text_muted_new} on {dark_bg_primary}")
check(dark_text_muted_new, dark_bg_primary, "text-muted on bg-primary (new)")

# For light theme, we need a darker color
# Let's try #7a7e6e (slightly darker)
light_text_muted_new = '#7a7e6e'
print(f"Light theme: try {light_text_muted_new} on {light_bg_primary}")
check(light_text_muted_new, light_bg_primary, "text-muted on bg-primary (new)")