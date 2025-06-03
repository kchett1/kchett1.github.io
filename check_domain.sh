#!/bin/bash
echo "🔍 Checking kieranchetty.com status..."
echo ""

echo "1. DNS Lookup Test:"
nslookup kieranchetty.com || echo "   ❌ Domain not found - needs to be purchased"

echo ""
echo "2. HTTP Test:"
curl -s -I http://kieranchetty.com | head -3 || echo "   ❌ Not accessible yet"

echo ""
echo "3. HTTPS Test:"
curl -s -I https://kieranchetty.com | head -3 || echo "   ❌ SSL not ready yet"

echo ""
echo "4. GitHub Pages Status:"
curl -s -I https://kchett1.github.io | head -3

echo ""
echo "✅ Run this script after domain purchase to monitor progress!" 