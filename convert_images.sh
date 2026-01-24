#!/bin/bash

# Directory containing assets
DIR="src/assets"

# Loop through Bonuses*.png files
for file in "$DIR"/Bonuses*.png; do
    if [ -f "$file" ]; then
        echo "Processing $file..."
        
        filename=$(basename "$file" .png)
        webp_file="$DIR/$filename.webp"
        
        # Convert to WebP
        magick "$file" -quality 85 -define webp:lossless=false "$webp_file"
        
        if [ $? -eq 0 ]; then
            echo "Created $webp_file"
        else
            echo "Error converting $file"
        fi
    fi
done

# Also convert the logo if needed, but specifically requested for bonuses first.
# Optimizing logo too as per plan
for file in "$DIR"/logo*.png; do
     if [ -f "$file" ]; then
        echo "Processing $file..."
        
        filename=$(basename "$file" .png)
        webp_file="$DIR/$filename.webp"
        
        # Convert to WebP
        magick "$file" -quality 85 -define webp:lossless=false "$webp_file"
        
         if [ $? -eq 0 ]; then
            echo "Created $webp_file"
        else
            echo "Error converting $file"
        fi
    fi
done
