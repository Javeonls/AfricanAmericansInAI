#!/usr/bin/env python3
"""
Script to update the AI diversity data timestamps.
This script updates the last_updated field in the JSON file.
"""

import json
import os
from datetime import datetime
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# Path to the data file
DATA_FILE_PATH = 'data/ai_diversity_data.json'

def update_data_file():
    """Update the data file with new timestamps."""
    try:
        # Read existing data
        with open(DATA_FILE_PATH, 'r') as f:
            data = json.load(f)
        
        # Update each dataset with new timestamps
        now = datetime.now().isoformat()
        
        for chart_name in data:
            for dataset in data[chart_name]['datasets']:
                if 'last_updated' in dataset:
                    dataset['last_updated'] = now
                else:
                    dataset['last_updated'] = now
        
        # Write updated data back to file
        with open(DATA_FILE_PATH, 'w') as f:
            json.dump(data, f, indent=2)
        
        logger.info(f"Successfully updated {DATA_FILE_PATH} with current timestamps")
        return True
    except Exception as e:
        logger.error(f"Error updating data file: {e}")
        return False

def main():
    """Main function to update the data."""
    logger.info("Starting data update process...")
    
    # Update the data file with current timestamps
    if update_data_file():
        logger.info("Data update completed successfully.")
    else:
        logger.error("Data update failed.")

if __name__ == "__main__":
    main()