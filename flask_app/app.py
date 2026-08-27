from flask import Flask, request, jsonify
import subprocess
import json

app = Flask(__name__)

@app.route('/check_contrast', methods=['POST'])
def check_contrast():
    data = request.get_json()
    bg_color = data.get('bg_color')
    text_color = data.get('text_color')
    
    # Simulate calling the Python contrast check script
    # For demo purposes, we'll use a mock response
    contrast_ratio = calculate_contrast_ratio(bg_color, text_color)
    is_accessible = contrast_ratio >= 4.5
    
    # Call the actual Python script (simulated here)
    # In a real setup, you would use subprocess to call check_contrast.py
    # result = subprocess.run(['python', '../check_contrast.py', bg_color, text_color], capture_output=True, text=True)
    
    return jsonify({
        'contrast_ratio': contrast_ratio,
        'is_accessible': is_accessible,
        'suggested_fix': 'Try a lighter/darker color' if not is_accessible else None
    })

def calculate_contrast_ratio(bg_color, text_color):
    # Convert hex to RGB
    bg_rgb = hex_to_rgb(bg_color)
    text_rgb = hex_to_rgb(text_color)
    
    # Calculate relative luminance
    bg_luminance = get_luminance(bg_rgb)
    text_luminance = get_luminance(text_rgb)
    
    # Calculate contrast ratio
    lighter = max(bg_luminance, text_luminance)
    darker = min(bg_luminance, text_luminance)
    return (lighter + 0.05) / (darker + 0.05)

def hex_to_rgb(hex_color):
    hex_color = hex_color.lstrip('#')
    if len(hex_color) == 3:
        hex_color = ''.join([c * 2 for c in hex_color])
    
    r = int(hex_color[0:2], 16) / 255
    g = int(hex_color[2:4], 16) / 255
    b = int(hex_color[4:6], 16) / 255
    return {'r': r, 'g': g, 'b': b}

def get_luminance(rgb):
    def linearize(v):
        return v / 12.92 if v <= 0.03928 else ((v + 0.055) / 1.055) ** 2.4
    
    a = [linearize(rgb['r']), linearize(rgb['g']), linearize(rgb['b'])]
    return 0.2126 * a[0] + 0.7152 * a[1] + 0.0722 * a[2]

if __name__ == '__main__':
    app.run(debug=True)