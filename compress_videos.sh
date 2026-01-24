#!/bin/bash

# Directory containing testimonials
DIR="src/assets/testimonials"

# Loop through all mp4 files in the directory
for file in "$DIR"/*.mp4; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        
        # Create a temporary output file
        filename=$(basename "$file")
        temp_file="$DIR/temp_$filename"
        
        # Compress using ffmpeg
        # -crf 28: Lower quality/higher compression (range 0-51, default 23)
        # -preset slow: Better compression for a given quality
        ffmpeg -i "$file" -vcodec libx264 -crf 28 -preset slow -acodec aac -b:a 128k "$temp_file" -y
        
        # Check if compression was successful
        if [ $? -eq 0 ]; then
            # Calculate sizes
            orig_size=$(stat -c%s "$file")
            new_size=$(stat -c%s "$temp_file")
            
            echo "Original size: $orig_size bytes"
            echo "New size: $new_size bytes"
            
            # If new file is smaller, replace original
            if [ $new_size -lt $orig_size ]; then
                mv "$file" "$DIR/original_$filename"
                mv "$temp_file" "$file"
                echo "Successfully compressed $filename. Original saved as original_$filename"
            else
                echo "Compression didn't reduce size significantly. Keeping original."
                rm "$temp_file"
            fi
        else
            echo "Error compressing $file"
            rm "$temp_file"
        fi
        echo "-----------------------------------"
    fi
done
